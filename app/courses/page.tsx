import { Users, Trophy, Heart, Zap, Target, Medal, Waves } from "lucide-react";
import { CoursesHero } from "@/components/courses/courses-hero";
import { CoursesGrid } from "@/components/courses/courses-grid";
import { InstructorInfo } from "@/components/courses/instructor-info";
import { EnrollmentProcess } from "@/components/courses/enrollment-process";
import { ScheduleSection } from "@/components/courses/schedule-section";

const courses = [
  {
    icon: <Waves className="h-8 w-8" />,
    title: "Learn to Swim",
    description:
      "Comprehensive swimming program for beginners of all ages, available throughout the year",
    schedule: "Year-round availability",
    level: "Beginner",
    ageGroup: "All ages",
    features: [
      "Basic water safety",
      "Fundamental strokes",
      "Breathing techniques",
      "Water confidence building",
    ],
    badge: "Most Popular",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Ladies Only Sessions",
    description:
      "Exclusive swimming sessions designed specifically for women in a comfortable, private environment.",
    schedule: "Year-round availability",
    level: "All levels",
    ageGroup: "Adults",
    features: [
      "Private female-only environment",
      "Female instructors",
      "Flexible skill levels",
      "Supportive community",
    ],
    badge: "Exclusive",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Swimming Lessons for Children (Ages 3-6)",
    description:
      "Fun and engaging swimming lessons specially designed for young children with safety as the priority.",
    schedule: "Year-round availability",
    level: "Beginner",
    ageGroup: "3-6 years",
    features: [
      "Play-based learning",
      "Small class sizes",
      "Parent observation area",
      "Safety-first approach",
    ],

    badge: "Kids Favorite",
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Competitive Coaching",
    description:
      "Advanced training program for swimmers looking to compete at regional and national levels.",
    schedule: "Year-round availability",
    level: "Advanced",
    ageGroup: "12+ years",
    features: [
      "Professional coaching",
      "Competition preparation",
      "Technique refinement",
      "Performance analysis",
    ],
    badge: "Elite",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Water Polo",
    description:
      "Dynamic team sport combining swimming, ball handling, and strategic gameplay.",
    schedule: "Year-round availability",
    level: "Intermediate",
    ageGroup: "14+ years",
    features: [
      "Team strategy training",
      "Ball handling skills",
      "Swimming endurance",
      "Match preparation",
    ],
    badge: "Team Sport",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fin Swimming",
    description:
      "Specialized swimming technique using fins for enhanced speed and underwater propulsion.",
    schedule: "Year-round availability",
    level: "Intermediate",
    ageGroup: "10+ years",
    features: [
      "Fin technique training",
      "Underwater skills",
      "Speed development",
      "Equipment provided",
    ],
    badge: "Specialized",
  },
  {
    icon: <Medal className="h-8 w-8" />,
    title: "Biathlon Swimming (Ironman)",
    description:
      "Intensive training program combining swimming with running, preparing athletes for Ironman competitions.",
    schedule: "Year-round availability",
    level: "Advanced",
    ageGroup: "18+ years",
    features: [
      "Endurance training",
      "Transition practice",
      "Nutrition guidance",
      "Competition prep",
    ],
    badge: "Ironman Prep",
  },
  {
    icon: <Waves className="h-8 w-8" />,
    title: "Triathlon Swimming",
    description:
      "Specialized swimming training for triathlon athletes focusing on open water techniques and endurance.",
    duration: "90 minutes",
    schedule: "Year-round availability",
    level: "Intermediate to Advanced",
    ageGroup: "16+ years",
    features: [
      "Open water simulation",
      "Drafting techniques",
      "Sighting practice",
      "Race strategy",
    ],
    badge: "Triathlon Focus",
  },
];

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "Most Popular":
      return "default";
    case "Exclusive":
      return "secondary";
    case "Kids Favorite":
      return "outline";
    case "Elite":
      return "destructive";
    default:
      return "secondary";
  }
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <CoursesHero />
      <CoursesGrid courses={courses} getBadgeVariant={getBadgeVariant} />
      <InstructorInfo />
      <EnrollmentProcess />
      <ScheduleSection />
    </div>
  );
}
