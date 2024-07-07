'use client'

import React from "react";
import { Button } from '@mantine/core';
import { useSignMessage } from "wagmi"

const Login = () => {
  const { signMessage } = useSignMessage();
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <w3m-button />
      <Button
        onClick={() => signMessage({ message: "hello world" })}
        variant="gradient"
        gradient={{ from: 'red', to: 'grape', deg: 170 }}
      >
        Signature
      </Button>
    </div>
  );
};

export default Login;
