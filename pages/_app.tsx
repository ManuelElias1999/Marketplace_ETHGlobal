import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { ethPersonalSign } from "@polybase/eth";

// const polybase = new Polybase({
//     signer: (data) => {
//         return {
//             h: "eth-personal-sign",
//             //@ts-ignore
//             sig: ethPersonalSign(
//                 "4b9552668303e45d5fcce71655f0bd1aee79d2113410ed173f34fbd3da6da70e",
//                 data
//             ),
//         };
//     },
//     defaultNamespace:
//         "pk/0x80b74e8dd75795df761336008c6b6e4f368246c34ad5a1946eee84751ee12dc141e866ff85cdfb2160a2f27896b05bcb885410bef0265d196abce2f0a5ace006/claymore",
// });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <PolybaseProvider polybase={polybase}> */}
            <Component {...pageProps} />
            {/* </PolybaseProvider> */}
        </>
    );
}
