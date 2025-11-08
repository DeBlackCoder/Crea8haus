"use client";
import { Code, PenTool, Palette, Cpu, Layers, Globe, PenLine, Camera, AppWindow, Brush, FolderGit2, BookOpen, MonitorSmartphone, Cloud, UserCheck } from "lucide-react";
import "./carousel.css";

export default function Carousel() {
  const items = [
    { icon: <Code size={28} />, label: "Software Dev" },
    { icon: <Palette size={28} />, label: "Graphics" },
    { icon: <PenTool size={28} />, label: "Brand Identity" },
    { icon: <Cpu size={28} />, label: "AI/ML" },
    { icon: <Layers size={28} />, label: "Web Architecture" },
    { icon: <Globe size={28} />, label: "Web Design" },
    { icon: <PenLine size={28} />, label: "Ghost Writing" },
    { icon: <Camera size={28} />, label: "Media & Editing" },
    { icon: <AppWindow size={28} />, label: "UI/UX" },
    { icon: <Brush size={28} />, label: "Creative Direction" },
    { icon: <FolderGit2 size={28} />, label: "Version Control" },
    { icon: <BookOpen size={28} />, label: "Research Writing" },
    { icon: <MonitorSmartphone size={28} />, label: "App Design" },
    { icon: <Cloud size={28} />, label: "Cloud Services" },
    { icon: <UserCheck size={28} />, label: "Consulting" },

     { icon: <Code size={28} />, label: "Software Dev" },
    { icon: <Palette size={28} />, label: "Graphics" },
    { icon: <PenTool size={28} />, label: "Brand Identity" },
    { icon: <Cpu size={28} />, label: "AI/ML" },
    { icon: <Layers size={28} />, label: "Web Architecture" },
    { icon: <Globe size={28} />, label: "Web Design" },
    { icon: <PenLine size={28} />, label: "Ghost Writing" },
    { icon: <Camera size={28} />, label: "Media & Editing" },
    { icon: <AppWindow size={28} />, label: "UI/UX" },
    { icon: <Brush size={28} />, label: "Creative Direction" },
    { icon: <FolderGit2 size={28} />, label: "Version Control" },
    { icon: <BookOpen size={28} />, label: "Research Writing" },
    { icon: <MonitorSmartphone size={28} />, label: "App Design" },
    { icon: <Cloud size={28} />, label: "Cloud Services" },
    { icon: <UserCheck size={28} />, label: "Consulting" },

     { icon: <Code size={28} />, label: "Software Dev" },
    { icon: <Palette size={28} />, label: "Graphics" },
    { icon: <PenTool size={28} />, label: "Brand Identity" },
    { icon: <Cpu size={28} />, label: "AI/ML" },
    { icon: <Layers size={28} />, label: "Web Architecture" },
    { icon: <Globe size={28} />, label: "Web Design" },
    { icon: <PenLine size={28} />, label: "Ghost Writing" },
    { icon: <Camera size={28} />, label: "Media & Editing" },
    { icon: <AppWindow size={28} />, label: "UI/UX" },
    { icon: <Brush size={28} />, label: "Creative Direction" },
    { icon: <FolderGit2 size={28} />, label: "Version Control" },
    { icon: <BookOpen size={28} />, label: "Research Writing" },
    { icon: <MonitorSmartphone size={28} />, label: "App Design" },
    { icon: <Cloud size={28} />, label: "Cloud Services" },
    { icon: <UserCheck size={28} />, label: "Consulting" },
  ];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {items.concat(items).map((item, index) => (
          <div className="carousel-item" key={index}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
