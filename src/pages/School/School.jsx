import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetSchoolQuery } from '../../api/schoolApi';
import { useParams } from 'react-router-dom';
import { useGetSchoolReviewsQuery } from '../../api/schoolReviewsApi';
import React from 'react';

export const School = () => {
  const { id } = useParams();
  const { data: schoolData = [], isLoading } = useGetSchoolQuery(id);
  const { data: schoolReviewsData = [] } = useGetSchoolReviewsQuery(id);
  if (isLoading) return <h1>Идет загрузка...</h1>;

  const activities = [
    {
      type: 'Профиль',
      text: schoolData?.profile?.map((i) => i.name).join(', '),
    },
    {
      type: 'Время работы',
      text: schoolData.working_hours,
    },
    {
      type: 'Возрастные группы',
      text: schoolData.age,
    },
    {
      type: 'Классы',
      text: schoolData.classes,
    },
    {
      type: 'Иностранные языки',
      text: schoolData?.languages?.map((i) => i.name).join(', '),
    },
  ];
  return (
    <OrgWrapper
      data={schoolData}
      feedback={schoolReviewsData}
      org='Школы'
      activities={activities}
    />
  );
};
