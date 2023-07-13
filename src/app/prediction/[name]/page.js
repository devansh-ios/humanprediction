import React from "react";

async function getPredictedAge(name) {
  try {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching predicted age:", error);
    throw error;
  }
}

async function getPredictedGender(name) {
  try {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching predicted age:", error);
    throw error;
  }
}

async function getPredictedCountry(name) {
  try {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching predicted age:", error);
    throw error;
  }
}

const page = async ({ params }) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  console.log(ageData);
  console.log(genderData);
  console.log(countryData);
  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="max-w-lg mx-auto my-3  bg-white  p-9  rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">
          Personal Info
        </div>
        <div className="block mt-1 text-lg leading-light font-medium text-black">Age: {age?.age} </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">Gender: {gender?.gender} </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">Country: {country?.country[0]?.country_id} </div>
      </div>
    </div>
  );
};

export default page;
