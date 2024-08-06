import useAuth from "../hooks/useAuth";

export default function SettingsScreen() {
  const { logout } = useAuth();
  logout();
  return null;
}
