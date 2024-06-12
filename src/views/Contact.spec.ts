import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Contact from "./Contact.vue";

const wrapper = mount(Contact);
const card = wrapper.find(".highlight-top");
const emailCriarArt = wrapper.find(
  '[aria-label="Email para contato@criar.art"]'
);
const emailLucas = wrapper.find(
  '[aria-label="Email para lucasferreiralimax@gmail.com"]'
);
const linkCriarArt = wrapper.find('[aria-label="Acessar Criar.Art"]');
const linkInstagram = wrapper.find(
  '[aria-label="Acessar instagram criar.art.tecnologia"]'
);

describe("Basic render Contact", () => {
  it("is Contact a vue instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Check if there is one v-col", () => {
    expect(wrapper.findAll(".v-col").length).toBe(1);
  });
  it("Check if the card is rendered correctly", () => {
    expect(card.find("h2").text()).toBe("Contato");
    expect(card.findAll("p").length).toBe(2);
  });
  it("Check if the email links are rendered correctly", () => {
    expect(emailCriarArt.text()).toEqual("contato@criar.art");
    expect(emailLucas.text()).toEqual("lucasferreiralimax@gmail.com");
  });
  it("Check if the external links are rendered correctly", () => {
    expect(linkCriarArt.text()).toEqual("Criar.Art");
    expect(linkInstagram.text()).toEqual("criar.art.tecnologia");
  });
});
