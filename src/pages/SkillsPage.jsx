import { useEffect, useState } from 'react'
// components
import Header from '../components/header'
import SocialBar from '../components/socialBar'
import Skills from '../components/skills'
import Loader from '../components/loader'
function SkillsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Header />
          <SocialBar />
          <Skills />
        </>
      )}
    </>
  )
}

export default SkillsPage