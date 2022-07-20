import Image from "next/image";
import Sample from "../components/sample";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {
        <h1 className="text-3xl font-bold underline">
          Hello, This is next js boilerplate structure with tailwind
        </h1>
      }
      <Sample />
    </div>
  );
}
