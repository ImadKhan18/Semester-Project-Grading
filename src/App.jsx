import React from 'react';
import HeroSection from './Components/Views/HeroSection';
import HowItWorks from './Components/views/HowItWorks';
import RecentResults from './Components/views/RecentResults';
import GradingPolicy from './Components/views/GradingPolicy';
import FeedbackSection from './Components/views/FeedbackSection';

// New components

// Props
import GradeCard from './Components/views/HomeViews/GradeCard';
import InfoBox from './Components/views/HomeViews/InfoBox';

// Childrens
import CardLayout from './Components/views/HomeViews/CardLayout';
import SectionContainer from './Components/views/HomeViews/SectionContainer';

const App = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <RecentResults />
      <GradingPolicy />

      {/* Components using Props */}
      <div className="px-6 py-4">
        <InfoBox
          title="Average Grade"
          description="Most students scored between B+ and A this semester."
          icon="🎓"
          bgColor="bg-green-500"
        />

        <GradeCard
          studentName="Ahsan Raza"
          course="Database Systems"
          grade="A"
          remarks="Consistent and detailed work"
        />
      </div>

      {/* Components using Children Props */}
      <SectionContainer title="Highlighted Grades">
        <CardLayout>
          <GradeCard
            studentName="Mehwish Ali"
            course="Computer Networks"
            grade="B+"
            remarks="Good participation in labs"
          />
        </CardLayout>
      </SectionContainer>
<FeedbackSection />
    </>
  );


};

export default App;
