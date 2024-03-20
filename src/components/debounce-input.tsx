"use client";

import { useEffect, useState } from "react"
import { Input } from "./ui/input";

export function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue)
  
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value)
      }, debounce)
  
      return () => clearTimeout(timeout)
    //   ignore eslint, if we want to run this effect only when value changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
  
    return (
      <Input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
  }