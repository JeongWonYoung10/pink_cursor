import { Badge } from "../primitives/Badge";

export function StatusPill({ children }: { children: React.ReactNode }) {
  return <Badge variant="status">{children}</Badge>;
}
