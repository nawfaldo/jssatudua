import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import StudentsTable from "~/components/StudentsTable";
import ViewStudentBox from "~/components/ViewStudentBox";
import { useRouter } from "next/router";
import EditStudentBox from "~/components/EditStudentBox";
import CreateStudentBox from "~/components/CreateStudentBox";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>10110</title>
      </Head>
      <main className="mt-10 flex w-full justify-center space-x-10">
        {router.query.view == undefined && router.query.edit == undefined && (
          <CreateStudentBox />
        )}
        {router.query.view != undefined && <ViewStudentBox />}
        {router.query.edit != undefined && <EditStudentBox />}
        <StudentsTable />
      </main>
    </>
  );
};

export default Home;
