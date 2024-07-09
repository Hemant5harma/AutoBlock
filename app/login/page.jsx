"use client";

import { Button } from "@mantine/core";
import { useAccount } from "wagmi";

import React from "react";
import { useSignMessage } from "wagmi";

const Login = () => {
  const {
    data: signMessageData,
    isSuccess: signMessageSuccess,
    signMessage,
  } = useSignMessage();

  const { address } = useAccount();

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <w3m-button />
      <div>{address}</div>
      <Button
        onClick={() => signMessage({ message: "hello world" })}
        variant="gradient"
        gradient={{ from: "red", to: "grape", deg: 170 }}
      >
        Signature
      </Button>
      {signMessageSuccess && <div>Signature: {signMessageData}</div>}
    </div>
  );
};

export default Login;
