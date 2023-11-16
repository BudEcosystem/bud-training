"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button, DropdownMenu, DropdownMenuTrigger } from "@radix-ui/themes"

 
export function ModeToggle() {
    const { theme, setTheme } = useTheme();
 
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="solid" size='1' color="indigo" style={{background: 'var(--nav-btn-bg-active)', border: '0', outline: '0', boxShadow:'none', padding: '.5em'}}>
          <SunIcon className="h-[1rem] w-[1rem] rounded-xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--nav-text)] hover:text-[var(--nav-text)]" />
          <MoonIcon className="absolute rounded-xl h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}