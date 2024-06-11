import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Contact from "./Contact.vue";

const wrapper = mount(Contact);
const card = wrapper.find(".highlight-top");
const emailLinks = card.findAll("a.text-link");
const externalLinks = card.findAll('a.text-link[target="_blank"');

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
    expect(card.findAll("li").length).toBe(4);
  });
  it("Check if the email links are rendered correctly", () => {
    expect(emailLinks.length).toBe(4);
    expect(emailLinks[1].attributes("href")).toBe("mailto:contato@criar.art");
    expect(emailLinks[2].attributes("href")).toBe(
      "mailto:lucasferreiralimax@gmail.com"
    );
  });
  it("Check if the external links are rendered correctly", () => {
    expect(externalLinks.length).toBe(2);
    expect(externalLinks[0].attributes("href")).toBe("https://criar.art/contact");
    expect(externalLinks[0].attributes("target")).toBe("_blank");
    expect(externalLinks[1].attributes("href")).toBe(
      "https://www.instagram.com/criar.art.tecnologia"
    );
    expect(externalLinks[1].attributes("target")).toBe("_blank");
  });
});
