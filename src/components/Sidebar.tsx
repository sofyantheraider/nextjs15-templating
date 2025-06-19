"use client";

export default function Sidebar() {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <span style={{ color: "var(--bs-primary)" }}>Materialize</span>
          </span>
          <span className="app-brand-text demo menu-text fw-semibold ms-2">Admin</span>
        </a>
        <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="ri-close-line" />
        </a>
      </div>

      <div className="menu-inner-shadow" />

      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <a href="/" className="menu-link">
            <i className="menu-icon tf-icons ri-home-smile-line"></i>
            <div>Home</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/about" className="menu-link">
            <i className="menu-icon tf-icons ri-information-line"></i>
            <div>About</div>
          </a>
        </li>
      </ul>
    </aside>
  );
}
