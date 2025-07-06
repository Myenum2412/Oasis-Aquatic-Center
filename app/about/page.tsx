import { RedesignedAboutHero } from "@/components/about/redesigned-about-hero"
import { EnhancedMissionVision } from "@/components/about/enhanced-mission-vision"
import { CoreValues } from "@/components/about/core-values"
import { OurStory } from "@/components/about/our-story"
import { EnhancedTeamSection } from "@/components/about/enhanced-team-section"
import { AchievementsSection } from "@/components/about/achievements-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <RedesignedAboutHero />
      <EnhancedMissionVision />
      <CoreValues />
      <OurStory />
      <EnhancedTeamSection />
      <AchievementsSection />
    </div>
  )
}
