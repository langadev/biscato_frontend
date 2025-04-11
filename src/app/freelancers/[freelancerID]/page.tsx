import React from 'react'

export default async function FreelancerProfile(
    {params}:{params:Promise<{freelancerId:string}>;}
) {
    const freelancerID = (await params).freelancerId;
  return (
    
    <div>
      <h1>FreeLancer  </h1>
      <p>{freelancerID}</p>
    </div>
  )
}
