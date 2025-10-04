"use client";
import React from "react";
import FilterContent from "./FilterContent";

export default function FilterSidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-30 self-start bg-white rounded-md border border-gray-200 p-4 h-fit">
      <FilterContent namePrefix="d" />
    </aside>
  );
}


