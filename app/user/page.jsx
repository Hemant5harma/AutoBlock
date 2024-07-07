"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Box from "@mui/material/Box";
import Switch from "@mui/joy/Switch";
import FlashlightOffRoundedIcon from "@mui/icons-material/FlashlightOffRounded";
import FlashlightOnRoundedIcon from "@mui/icons-material/FlashlightOnRounded";
import Slider from "@mui/material/Slider";
import Navbar from "../navbar/Navbar";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Navbar/>
      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="border-2 border-black rounded-lg p-4 h-full overflow-x-auto">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p>Your all room appliances are here.</p>
          <div className="flex flex-wrap">
            <div className="m-6 w-[225px] h-[250px] border-2 border-black rounded-lg flex flex-col justify-between items-center">
              <h2 className="font-bold">Fan</h2>
              <Switch
                className="mt-4"
                color={dark ? "primary" : "danger"}
                slotProps={{ input: { "aria-label": "dark mode" } }}
                startDecorator={
                  <FlashlightOffRoundedIcon
                    sx={{ color: dark ? "#00000080" : "#dc004e" }}
                  />
                }
                endDecorator={
                  <FlashlightOnRoundedIcon
                    sx={{ color: dark ? "#1976d2" : "#00000080" }}
                  />
                }
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
              />
              <Box sx={{ width: 100 }}>
                <Slider
                  aria-label="Speed"
                  defaultValue={40}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </Box>
            </div>
            <div className="m-6 w-[225px] h-[250px] border-2 border-black rounded-lg flex flex-col justify-between items-center">
              <h2 className="font-bold">Fan</h2>
              <Switch
                className="mt-4"
                color={dark ? "primary" : "danger"}
                slotProps={{ input: { "aria-label": "dark mode" } }}
                startDecorator={
                  <FlashlightOffRoundedIcon
                    sx={{ color: dark ? "#00000080" : "#dc004e" }}
                  />
                }
                endDecorator={
                  <FlashlightOnRoundedIcon
                    sx={{ color: dark ? "#1976d2" : "#00000080" }}
                  />
                }
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
              />
              <Box sx={{ width: 100 }}>
                <Slider
                  aria-label="Speed"
                  defaultValue={40}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </Box>
            </div>
            <div className="m-6 w-[225px] h-[250px] border-2 border-black rounded-lg flex flex-col justify-between items-center">
              <h2 className="font-bold">Fan</h2>
              <Switch
                className="mt-4"
                color={dark ? "primary" : "danger"}
                slotProps={{ input: { "aria-label": "dark mode" } }}
                startDecorator={
                  <FlashlightOffRoundedIcon
                    sx={{ color: dark ? "#00000080" : "#dc004e" }}
                  />
                }
                endDecorator={
                  <FlashlightOnRoundedIcon
                    sx={{ color: dark ? "#1976d2" : "#00000080" }}
                  />
                }
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
              />
              <Box sx={{ width: 100 }}>
                <Slider
                  aria-label="Speed"
                  defaultValue={40}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </Box>
            </div>
            <div className="m-6 w-[225px] h-[250px] border-2 border-black rounded-lg flex flex-col justify-between items-center">
              <h2 className="font-bold">Fan</h2>
              <Switch
                className="mt-4"
                color={dark ? "primary" : "danger"}
                slotProps={{ input: { "aria-label": "dark mode" } }}
                startDecorator={
                  <FlashlightOffRoundedIcon
                    sx={{ color: dark ? "#00000080" : "#dc004e" }}
                  />
                }
                endDecorator={
                  <FlashlightOnRoundedIcon
                    sx={{ color: dark ? "#1976d2" : "#00000080" }}
                  />
                }
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
              />
              <Box sx={{ width: 100 }}>
                <Slider
                  aria-label="Speed"
                  defaultValue={40}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
