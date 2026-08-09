import type { StatisticItem } from "@/types/content"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  item: StatisticItem
}

export function StatCard({ item }: StatCardProps) {
  return (
    <Card className="ds-elevated">
      <CardHeader>
        <CardDescription>{item.label}</CardDescription>
        <CardTitle className="text-3xl font-semibold text-primary">
          {item.value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="ds-body text-sm">{item.description}</p>
      </CardContent>
    </Card>
  )
}
