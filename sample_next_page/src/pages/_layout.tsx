export default function Layout({ children, data}) {
    return (
      <>
        <h1 className="header">{data?.title ?? "Index page"}</h1>
        <main>{children}</main>
        <hr className="footer" />
        <p className="footer">copyright 2023 SYODA-Tuyano.</p>
      </>
    );
  }
  