import React from 'react'
import ContractFrom from '../components/ContractFrom/ContractFrom'
import HeroArea from '../components/HeroArea'
import ViewContract from '../components/ContractFrom/ViewContract'

const ContractUs = () => {
  const isAdmin =true;
  const isStudent = false
  return (
    <>
    <div>
        <HeroArea
        title="Contract Us"
        description="We are always connected with you and ready to help. Feel free to ask anything"
      />
    </div>
    <div>
      {isAdmin && <ViewContract />}

        {isStudent && <ViewContract />}
    </div>
    </>
    
  )
}

export default ContractUs