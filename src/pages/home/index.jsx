import { FunnelSimple } from "@phosphor-icons/react";
import { Avatar } from "../../components/avatar";
import { Header } from "./style";

export function Home() {
  return (
    <>
      <Header>
        <nav>
          <FunnelSimple size={20} weight="bold" /> Home <Avatar />
        </nav>
      </Header>
      <div className="container" style={{ height: "calc(100% - 64px)" }}>
        asd
      </div>
    </>
  );
}
