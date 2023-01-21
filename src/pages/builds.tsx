import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";
import React from "react";
import Link from "next/link";

const BuildsPage: NextPage = () => {
  const { data: builds } = api.builds.getBuilds.useQuery();

  return (
    <>
      <Head>
        <title>Build Orders</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit a Build order</h1>

        <table className="table-auto">
          <th className="border-white">
            <td>Match Up</td>
            <td>Build</td>
          </th>
          {builds?.map((build) => (
            <tr key={build.id}>
              <td>{build.matchUp}</td>
              <td>{build.build}</td>
            </tr>
          ))}
        </table>
        <Link href="/submit-build">Submit a new Build Order</Link>
        <Link href="/">Back to Home</Link>
      </main>
    </>
  );
};

export default BuildsPage;