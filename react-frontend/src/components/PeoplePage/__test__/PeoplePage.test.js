import React from "react";
import { render, screen } from "@testing-library/react";

import PeoplePage from "../PeoplePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders people page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PeoplePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("people-datatable")).toBeInTheDocument();
    expect(screen.getByRole("people-add-button")).toBeInTheDocument();
});
