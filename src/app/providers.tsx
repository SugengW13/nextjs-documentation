'use client'

import React from "react";
import {Provider} from "react-redux";
import {NextUIProvider} from "@nextui-org/react";
import {store} from "@/store/store";

export default function Providers ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Provider>
  )
}
