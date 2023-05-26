import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./assets/images/favicon-32x32.png"
                />

                <title>Frontend Mentor | Age Calculator App</title>
            </Head>

            <body className="w-screen h-screen bg-offWhite">{children}</body>
        </html>
    );
}
