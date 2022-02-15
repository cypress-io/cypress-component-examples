import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

describe("User Management | Users", () => {
	beforeEach(() => {
		cy.intercept("GET", "/users", { fixture: "example.json" }).as("getUsers");
		cy.intercept("GET", "/groups/*", { fixture: "example.json", delay: 300 }).as("getGroup");
		cy.intercept("GET", "/groups", { fixture: "example.json" }).as("getGroups");
	});

	it("test 1", () => {
		mount(<App />);

		cy.wait(["@getUsers", "@getGroup", "@getGroups"]).then(_ => {
			// OK
		});
	});

	it("test 2", () => {
		mount(<App />);

		cy.wait(["@getUsers", "@getGroup", "@getGroups"]).then(_ => {
			// OK
		});
	});

	it("test 3", () => {
		mount(<App />);

		cy.wait(["@getUsers", "@getGroup", "@getGroups"]).then(_ => {
			// FAIL with 404 on GET /groups/3
		});
	});
});
