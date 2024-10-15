import HandleLogout from "@/app/api/auth/removeToken"; //this will remove the token during logout

export default function Dashboard() {
  return (
    <>
      <div className="bg-white w-full h-full">
        <div className="bg-white">DASHBOARD</div>
        <HandleLogout/>
      </div>
    </>
  );
}