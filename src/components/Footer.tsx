"use client";

export default function Footer() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          © {new Date().getFullYear()}, made with ❤️ by
          <a href="https://pixinvent.com" target="_blank" rel="noreferrer" className="footer-link ms-1">
            Pixinvent
          </a>
        </div>
        <div>
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/" target="_blank" className="footer-link me-4">
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
}
