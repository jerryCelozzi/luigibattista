import { notFound } from 'next/navigation'
import { getActivity, activities } from '@/lib/activities'
import ActivityDetail from '@/components/ActivityDetail'

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const activity = getActivity(params.slug)
  if (!activity) return {}
  return {
    title: `${activity.title} — Luigi Battista`,
    description: activity.shortDescription,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const activity = getActivity(params.slug)
  if (!activity) notFound()
  return <ActivityDetail activity={activity!} />
}
