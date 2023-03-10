/** @odoo-module **/

import { browser } from "@web/core/browser/browser";
import { mount } from "@odoo/owl";
import { Playground } from "./playground";

import { templates } from "@web/core/assets";
owl.whenReady(() => {
    mount(Playground, document.body, { templates, dev: true });
});

function logError(ev){
    ev.preventDefault();
    let error = ev ?.error || ev.reason;

    if(error.seen){
        return;
    }
    error.seen = true;

    let errorMessage = error.stack;
    while(error.cause){
        errorMessage += "\nCaused by: "
        errorMessage += error.cause.stack;
        error = error.cause;
    }
    console.error(errorMessage);
}
browser.addEventListener("error", (ev) => {logError(ev)});
browser.addEventListener("unhandledrejection", (ev) => {logError(ev)});
