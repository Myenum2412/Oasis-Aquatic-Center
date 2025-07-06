export function AchievementsSection() {
  const achievements = [
    { number: "6+", label: "Years of Excellence", description: "Serving the community since 2001" },
    { number: "100+", label: "Students Trained", description: "Lives transformed through swimming" },
    { number: "10+", label: "Certified Instructors", description: "Expert professionals on our team" },
    { number: "100%", label: "Safety Record", description: "Commitment to swimmer safety" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our community has placed in us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
