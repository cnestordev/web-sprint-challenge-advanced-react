import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    //test whether inputs are displayed on DOM
    const fnInput = screen.getByLabelText(/first name/i)
    expect(fnInput).toBeInTheDocument()

    const lnInput = screen.getByLabelText(/last name/i)
    expect(lnInput).toBeInTheDocument()

    const addressInput = screen.getByLabelText(/address/i)
    expect(addressInput).toBeInTheDocument()

    const cityInput = screen.getByLabelText(/city/i)
    expect(cityInput).toBeInTheDocument()

    const stateInput = screen.getByLabelText(/state/i)
    expect(stateInput).toBeInTheDocument()

    const zipInput = screen.getByLabelText(/zip/i)
    expect(zipInput).toBeInTheDocument()

    //test if inputs are working
    fireEvent.change(fnInput, { target: { value: 'John' } })
    expect(fnInput.value).toBe('John')

    fireEvent.change(lnInput, { target: { value: 'Doe' } })
    expect(lnInput.value).toBe('Doe')

    fireEvent.change(addressInput, { target: { value: '123 Fake St' } })
    expect(addressInput.value).toBe('123 Fake St')

    fireEvent.change(cityInput, { target: { value: 'Clearwater' } })
    expect(cityInput.value).toBe('Clearwater')

    fireEvent.change(stateInput, { target: { value: 'Utah' } })
    expect(stateInput.value).toBe('Utah')

    fireEvent.change(zipInput, { target: { value: '45600' } })
    expect(zipInput.value).toBe('45600')

    const submitBtn = screen.getByRole('button', { name: /checkout/i })
    expect(submitBtn).toBeInTheDocument()

    fireEvent.click(submitBtn)

    const results = await screen.findByText('John Doe')
    expect(results).toBeInTheDocument()


})
