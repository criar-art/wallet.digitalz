import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Register, sortValue, typeValue } from '@/types'
import * as CryptoJS from 'crypto-js'
import { AES } from 'crypto-js'

function getTotal(registers: any) {
  return registers.reduce((a: number, { value }: Register) => Number(value) + Number(a), 0)
}

function shortRegisters(registers: any, type: string) {
  const entrys = registers.filter(({ type: { value } }: typeValue) => value == type)
  return [
    ...entrys.sort((a: sortValue, b: sortValue) => b.value - a.value)
  ]
}

export const useWalletStore = defineStore('wallet', {
  state: (): any => { // @TODO adjustment type
    return {
      registers: useStorage('my-wallet', [], undefined, {
        serializer: {
          read: (v: string) => JSON.parse(AES.decrypt(v, import.meta.env.VITE_WALLET_DIGITAL).toString(CryptoJS.enc.Utf8)),
          write: (v: Register[]) => String(AES.encrypt(JSON.stringify(v), import.meta.env.VITE_WALLET_DIGITAL))
        },
      }),
      eye: useStorage('my-wallet-eye', false, undefined, {
        serializer: {
          read: (v: string) => JSON.parse(AES.decrypt(v, import.meta.env.VITE_WALLET_DIGITAL).toString(CryptoJS.enc.Utf8)),
          write: (v: boolean) => String(AES.encrypt(JSON.stringify(v), import.meta.env.VITE_WALLET_DIGITAL))
        },
      })
    }
  },
  getters: {
    getIds: ({ registers }) => registers.map(({ id }: Register) => id),
    getEntrys: ({ registers }) => shortRegisters(registers, 'entry'),
    getExpenses: ({ registers }) => shortRegisters(registers, 'expense'),
    getTrucks: ({ registers }) => shortRegisters(registers, 'truck'),
    getVehicles: ({ registers }) => shortRegisters(registers, 'vehicle'),
    getMotorcycle: ({ registers }) => shortRegisters(registers, 'motorcycle'),
    getExpensesNoPay: ({ registers }) => shortRegisters(registers, 'expense').filter(({ pay }: Register) => !pay),
    getInvestiments: ({ registers }) => shortRegisters(registers, 'investiment'),
    getRegisters: ({ getEntrys, getExpenses, getInvestiments }) => {
      return [...getEntrys, ...getInvestiments, ...getExpenses]
    },
    getEntryTotal: ({ getEntrys }) => getTotal(getEntrys),
    getTrucksTotal: ({ getTrucks }) => getTotal(getTrucks),
    getVehiclesTotal: ({ getVehicles }) => getTotal(getVehicles),
    getMotorcycleTotal: ({ getMotorcycle }) => getTotal(getMotorcycle),
    getExpensesTotal: ({ getExpensesNoPay }) => getTotal(getExpensesNoPay),
    getInvestimentTotal: ({ getInvestiments }) => getTotal(getInvestiments),
    getTotalLessExpense: ({ getEntryTotal: entrys, getExpensesTotal: expenses }) => {
      return entrys ? Number(entrys - expenses) : 0;
    },
    getTotalPatrimony: ({ getInvestimentTotal, getTotalLessExpense }) => {
      return getInvestimentTotal && getTotalLessExpense
        ? Number(getInvestimentTotal + getTotalLessExpense)
        : 0;
    },
  },
  actions: {
    newRegister(register: Register) {
      this.registers.push(register)
    },
    editRegister(register: Register) {
      const itemIndex = this.registers.findIndex(({ id }: Register) => id == register.id)
      this.registers[itemIndex] = register;
    },
    deleteRegister(target: string) {
      this.registers = this.registers.filter(({ id }: Register) => id !== target)
    },
    eyeToggle() {
      this.eye = !this.eye
    },
  },
})
