import user from "../fixtures/user.json"

const { emailAdmin, emailInstructor, password } = user

describe('Test login', () => {
  // it("logins with dev credentials through the UI", () => {
  //   cy.visit("/")

  //   cy.contains("Sign in with email").click()

  //   // cy.get("input[type=email]").type(email)
  //   cy.get("input[type=email]").type(email2)

  //   cy.contains("Next").click()

  //   cy.get("input[type=password]").type(password)

  //   cy.get(".firebaseui-id-submit").contains("Sign In").click()

  //   cy.contains("Sign Out").should("exist")
  // })

  it("logins with dev credentials WITHOUT the UI", () => {
    cy.visit("/")

    cy.login(emailAdmin, password)

    cy.contains("Sign Out").should("exist")
  })
})

export {}
