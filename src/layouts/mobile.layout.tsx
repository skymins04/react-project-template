import { PropsWithChildren } from "react";

const MobileLayout = (props: PropsWithChildren) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "1170px",
          padding: "var(--pd)",
          margin: "auto",
          marginTop: "1rem",
          height: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default MobileLayout;
