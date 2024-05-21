export default function Layout({
    children,
    team,
    analytics,
  }: Readonly<{
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
  }>) {
    return (
        <>
          {children}
          {team}
          {analytics}
          </>
    );
  }
  