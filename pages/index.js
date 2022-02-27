import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PageOne from "../components/PageOne/PageOne";
import PageTwo from "../components/PageTwo/PageTwo";
import PageThree from "../components/PageThree/PageThree";

export default function Home() {
      return (
            <div>
                  <PageOne />
                  <PageThree />
            </div>
      );
}