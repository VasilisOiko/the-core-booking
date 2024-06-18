import { fetchClient } from "../services/user"


type athlete = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string | null,
    registered: string,
    waiver: boolean,
    medical: boolean,
    image: string | null,
    memberships: {
        ends: string,
        starts: string,
        description: string,
        isVisit: boolean,
        visits: number
    }[]
}

type AthletePastBookings = {
    id: string,
    athleteId: string,
    gymId: null | string,
    wodClassId: string,
    dailyClassesId: number,
    title: string,
    time: string,
    isSubstituted: boolean,
    capacity: number,
    booked: number,
    substitutions: number,
    date: string,
    bookedTime: string | null,
    cancellationTime: string | null,
    athleteName: string | null
}[]

const getClient = async () => {

    try {
        const response = await fetchClient()
        console.log("------------------------------client: ", response)

        return "OK"
    }
    catch (error) {
        return error
    }
}

const getAthlete = async (): Promise<athlete> => {

    try {
        const response = await fetchClient()

        return {
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phone: response.phone,
            address: response.address,
            registered: response.registered,
            waiver: response.waiver,
            medical: response.medical,
            image: response.image,
            memberships: response.memberships
        }
    }
    catch (error) {
        return Promise.reject(error)
    }
}

const getAthletePastBookings = async (): Promise<AthletePastBookings> => {

    try {
        const response = await fetchClient()

        return response.athleteBookings
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export { getClient, getAthlete, getAthletePastBookings }

/*
{
  firstName: 'Βασίλης',
  lastName: 'Οικονόμου',
  email: 'billy-oikok@hotmail.com',
  phone: '6989405704',
  address: null,
  registered: '2022-02-24T15:07:49.581Z',
  waiver: false,
  medical: false,
  image: null,
  memberships: [
    {
      ends: '2024-06-28T20:00:00Z',
      starts: '2024-05-29T09:00:00Z',
      description: '1 Μήνας CrossFit',
      isVisit: false,
      visits: 0
    }
  ],
  athleteBookings: [
    {
      id: '9b0f56e8-39db-44dd-b1df-2e5b6cd51720',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '258ae2fb-a62a-44fa-8d71-bf3567a6c15c',
      dailyClassesId: 10406,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 26,
      substitutions: 5,
      date: '2024-06-18T09:00:00Z',
      bookedTime: '2024-06-18T16:33:10.293991Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'f150bca1-68ae-4316-87b2-62e65636b663',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '34038ad3-85b6-4b2a-b1bc-e9d39f444c39',
      dailyClassesId: 10402,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 28,
      substitutions: 5,
      date: '2024-06-17T09:00:00Z',
      bookedTime: '2024-06-17T16:52:13.7720905Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'fe3271d5-8fda-4f99-9ac8-6c2df4ca8514',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '68301d10-a5bd-411d-a3ac-1d0941658279',
      dailyClassesId: 10417,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 32,
      substitutions: 5,
      date: '2024-06-14T09:00:00Z',
      bookedTime: '2024-06-14T15:37:19.4857916Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'fb7ad746-7254-4a7d-8ff0-1cf1858c8647',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '9fcc0efa-33ea-4643-bc21-c72cf4be502a',
      dailyClassesId: 10413,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 26,
      substitutions: 5,
      date: '2024-06-13T09:00:00Z',
      bookedTime: '2024-06-13T16:38:26.644253Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'e4f0af15-3b19-4514-9f86-fb91bac0b209',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'e73b8a96-52c0-41d7-83e8-029cb76344b0',
      dailyClassesId: 10405,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 33,
      substitutions: 5,
      date: '2024-06-11T09:00:00Z',
      bookedTime: '2024-06-11T16:14:17.9472245Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'db8e2261-aa92-408c-a5e0-971bce1417e4',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'fa21320a-590c-41f3-8a7f-7752ea539893',
      dailyClassesId: 10401,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 21,
      substitutions: 5,
      date: '2024-06-10T09:00:00Z',
      bookedTime: '2024-06-10T16:18:54.2422037Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'd7adf4d7-7f86-4452-8f2a-30c751e25d17',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'dc31b8d4-9fbe-4123-b4df-12a39748394b',
      dailyClassesId: 10416,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 35,
      substitutions: 5,
      date: '2024-06-07T09:00:00Z',
      bookedTime: '2024-06-07T16:32:13.1867905Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '3a4254b2-9f83-4eb3-8910-4e01b849698d',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '934ed873-7a73-465a-b529-61f685b1ac38',
      dailyClassesId: 10412,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 25,
      substitutions: 5,
      date: '2024-06-06T09:00:00Z',
      bookedTime: '2024-06-06T16:11:12.800518Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '04b5cad9-e246-42a5-9446-39843a6fa057',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'b1c23d29-b25b-4c07-a4e1-adeff7128957',
      dailyClassesId: 10404,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: true,
      capacity: 35,
      booked: 38,
      substitutions: 5,
      date: '2024-06-04T09:00:00Z',
      bookedTime: '2024-06-04T16:58:48.9474102Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '22b7e2d3-e19a-4f3e-8b48-05ee1821a7d6',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '82c0812d-8915-49f1-ac4c-5eedda3129d5',
      dailyClassesId: 10395,
      title: 'CrossFit',
      time: '11:30',
      isSubstituted: false,
      capacity: 35,
      booked: 25,
      substitutions: 5,
      date: '2024-06-01T09:00:00Z',
      bookedTime: '2024-06-01T07:06:10.9573485Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'fde7d377-9e08-4a42-aab1-f4cc73840c6a',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '012bc2cc-3c8f-4fd6-8ff9-88da0b29e474',
      dailyClassesId: 10383,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 25,
      substitutions: 5,
      date: '2024-05-29T09:00:00Z',
      bookedTime: '2024-05-29T16:40:39.7600216Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '7a37e81a-7726-40ad-ad5e-fd60a76b8500',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'e04fa095-fa37-4101-b267-417e4c9e2ce6',
      dailyClassesId: 10425,
      title: 'MEMORIAL MURPH ',
      time: '20:30',
      isSubstituted: false,
      capacity: 35,
      booked: 36,
      substitutions: 2,
      date: '2024-05-27T09:00:00Z',
      bookedTime: '2024-05-27T15:43:26.944026Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'a95e1da7-0445-4ba1-8492-ee9ad939c375',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'c15a0ee1-60fa-49bb-909c-64d2f32ade33',
      dailyClassesId: 10393,
      title: 'CrossFit',
      time: '11:30',
      isSubstituted: false,
      capacity: 35,
      booked: 24,
      substitutions: 5,
      date: '2024-05-25T09:00:00Z',
      bookedTime: '2024-05-25T07:45:14.9354564Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '507f9126-db58-4719-ab51-8f3b58dbee60',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'e3fca675-3b34-491a-ab6c-f6688a154287',
      dailyClassesId: 10385,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 30,
      substitutions: 5,
      date: '2024-05-23T09:00:00Z',
      bookedTime: '2024-05-23T16:31:58.1499372Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'bd5dd023-9768-4684-97d7-04ca630f9caa',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '780a6ddc-d8f1-473f-8589-f7ca0b91372e',
      dailyClassesId: 10380,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 32,
      substitutions: 5,
      date: '2024-05-21T09:00:00Z',
      bookedTime: '2024-05-21T16:40:36.533821Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '748b29b4-21bf-4106-ad61-7c37ccaab4a8',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '45cf1211-aebe-4404-be1c-fd3eafcb3dd2',
      dailyClassesId: 10378,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 34,
      substitutions: 5,
      date: '2024-05-20T09:00:00Z',
      bookedTime: '2024-05-20T15:47:18.6703789Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '07c0cd23-0d83-4ed6-9799-153b191f393d',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '92cff87e-c553-476c-a618-9e4d6f6b050f',
      dailyClassesId: 10392,
      title: 'CrossFit',
      time: '11:30',
      isSubstituted: false,
      capacity: 35,
      booked: 25,
      substitutions: 5,
      date: '2024-05-18T09:00:00Z',
      bookedTime: '2024-05-18T08:06:34.1113341Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '0e279233-b95b-4b30-8276-2b7a4b43acd1',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'db8f837f-1e91-4036-bec1-0e54b1020525',
      dailyClassesId: 10377,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 32,
      substitutions: 5,
      date: '2024-05-15T09:00:00Z',
      bookedTime: '2024-05-15T16:40:14.0814797Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'd761fbac-b925-41a7-be16-dedbff2da6c7',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '1e70d624-e2c4-4d71-9fe0-407f0999552c',
      dailyClassesId: 10376,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 32,
      substitutions: 5,
      date: '2024-05-14T09:00:00Z',
      bookedTime: '2024-05-14T16:53:47.8318876Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '53c8eed1-05b9-42fb-9097-1bf434ae6975',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '7375cff5-134f-4a0b-bf4f-116a0324e1e7',
      dailyClassesId: 10368,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 16,
      substitutions: 5,
      date: '2024-05-02T09:00:00Z',
      bookedTime: '2024-05-02T16:46:02.9582566Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '6825f6ef-b14d-40b3-9440-fe0dd23ccb83',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '60ac796f-42c3-44b0-a25b-67c4af6ac198',
      dailyClassesId: 10364,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 33,
      substitutions: 5,
      date: '2024-04-29T09:00:00Z',
      bookedTime: '2024-04-29T16:45:15.1003993Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'e3ff1e1f-0d67-4b33-b294-42e83064161e',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'c3ad5da3-05c1-4853-9772-3d310c0fcd4a',
      dailyClassesId: 10362,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 29,
      substitutions: 5,
      date: '2024-04-26T09:00:00Z',
      bookedTime: '2024-04-26T16:37:31.8191646Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'b3667035-089e-4966-bfcb-5a52ca66dd50',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'e824908c-835d-437e-bbce-f073964b67df',
      dailyClassesId: 10360,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 25,
      substitutions: 5,
      date: '2024-04-24T09:00:00Z',
      bookedTime: '2024-04-24T16:47:33.373642Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '49568890-8d74-4d86-bdc7-92dc48199c42',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'eb53e832-48af-4fed-bc80-3a1678debad9',
      dailyClassesId: 10359,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 33,
      substitutions: 5,
      date: '2024-04-23T09:00:00Z',
      bookedTime: '2024-04-23T15:48:46.3392281Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'c455ec8a-7e8c-4d2b-8345-afc7c36cd2dc',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '7a37409f-8017-4944-80f0-1d4685b8de8f',
      dailyClassesId: 10357,
      title: 'CrossFit',
      time: '11:30',
      isSubstituted: false,
      capacity: 35,
      booked: 16,
      substitutions: 5,
      date: '2024-04-20T09:00:00Z',
      bookedTime: '2024-04-20T08:14:05.0573356Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '548dbf00-bc7e-4ab8-a341-53df230ba517',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'ffd0026c-d773-46ec-8868-2e55a9171fc2',
      dailyClassesId: 10355,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 26,
      substitutions: 5,
      date: '2024-04-18T09:00:00Z',
      bookedTime: '2024-04-18T16:09:07.3424087Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '9d283e22-c82a-4b9e-84d0-f13e16c8a0fe',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'a722b5f2-b9ce-4c11-b2c4-6501ac9e278c',
      dailyClassesId: 10354,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 30,
      substitutions: 5,
      date: '2024-04-17T09:00:00Z',
      bookedTime: '2024-04-17T16:07:55.0403533Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: 'afcf193b-c95e-473a-af52-08bfbc52a157',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '8790e771-6f98-43c9-bbb5-922921339a96',
      dailyClassesId: 10348,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 30,
      substitutions: 5,
      date: '2024-04-10T09:00:00Z',
      bookedTime: '2024-04-10T16:25:52.8063174Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '9deb120b-b392-46f1-993c-48717414b285',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: '4645f815-3614-483b-b3ed-a98396e073ef',
      dailyClassesId: 10346,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 33,
      substitutions: 5,
      date: '2024-04-08T09:00:00Z',
      bookedTime: '2024-04-08T16:30:29.8739049Z',
      cancellationTime: null,
      athleteName: null
    },
    {
      id: '8d70fb94-283f-41c5-b359-bd61940f19ed',
      athleteId: 'ddb67c26-e64c-4cc9-9468-0f1f75eb3e67',
      gymId: null,
      wodClassId: 'fd2eeeaf-8dae-4f6d-bc21-ba662b46b6f8',
      dailyClassesId: 10344,
      title: 'CrossFit',
      time: '20:00',
      isSubstituted: false,
      capacity: 35,
      booked: 26,
      substitutions: 5,
      date: '2024-04-05T09:00:00Z',
      bookedTime: '2024-04-05T16:24:42.0299617Z',
      cancellationTime: null,
      athleteName: null
    }
  ],
  clientUnit: {
    image: 'iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAYAAABNo9TkAAAgAElEQVR4Xuy92bNk2Xndt86Y453qVlVXdVd3dQPdBDhBDCpCDr1IcvgPkF/85vCLw6ZB0aIp0hxkyiRsSiHSCDI4iaQcnhTWgyPsBz07FH7xC8OSOIIEQKC70VPNVXfK6Uzbsb6TX/XG4a0GQYLErb4rK7Iyb+YZ9v7tnZln7W9KoJsIiIAIiIAIiIAIiIAIiIAIiIAIiMC3nUDybW+BGiACIiACIiACIiACIiACIiACIiACIgAJdE0CERABERABERABERABERABERABEbgABCTQL8AgqAkiIAIiIAIiIAIiIAIiIAIiIAIiIIGuOSACIiACIiACIiACIiACIiACIiACF4CABPoFGAQ1QQREQAREQAREQAREQAREQAREQAQk0DUHREAEREAEREAEREAEREAEREAEROACEJBAvwCDoCaIgAiIgAiIgAiIgAiIgAiIgAiIgAS65oAIiIAIiIAIiIAIiIAIiIAIiIAIXAACEugXYBDUBBEQAREQAREQAREQAREQAREQARGQQNccEAEREAEREAEREAEREAEREAEREIELQEAC/QIMgpogAiIgAiIgAiIgAiIgAiIgAiIgAhLomgMiIAIiIAIiIAIiIAIiIAIiIAIicAEISKBfgEFQE0RABERABERABERABERABERABERAAl1zQAREQAREQAREQAREQAREQAREQAQuAAEJ9AswCGqCCIiACIiACIiACIiACIiACIiACEigaw6IgAiIgAiIgAiIgAiIgAiIgAiIwAUgIIF+AQZBTRABERABERABERABERABERABERABCXTNAREQAREQAREQAREQAREQAREQARG4AAQk0C/AIKgJIiACIiACIiACIiACIiACIiACIiCBrjkgAiIgAiIgAiIgAiIgAiIgAiIgAheAgAT6BRgENUEEREAEREAEREAEREAEREAEREAEJNA1B0RABERABERABERABERABERABETgAhCQQL8Ag6AmiIAIiIAIiIAIiIAIiIAIiIAIiIAEuuaACIiACIiACIiACIiACIiACIiACFwAAhLoF2AQ1AQREAEREAEREAEREAEREAEREAERkEDXHBABERABERABERABERABERABERCBC0BAAv0CDIKaIAIiIAIiIAIiIAIiIAIiIAIiIAIS6JoDIiACIiACIiACIiACIiACIiACInABCEigX4BBUBNEQAREQAREQAREQAREQAREQAREQAJdc0AEREAEREAEREAEREAEREAEREAELgABCfQLMAhqggiIgAiIgAiIgAiIgAiIgAiIgAhIoGsOiIAIiIAIiIAIiIAIiIAIiIAIiMAFICCBfgEGQU0QAREQAREQAREQAREQAREQAREQAQl0zQEREAEREAEREAEREAEREAEREAERuAAEJNAvwCCoCSIgAiIgAiIgAiIgAiIgAiIgAiIgga45IAIiIAIiIAIiIAIiIAIiIAIiIAIXgIAE+gUYBDVBBERABERABERABERABERABERABCTQNQdEQAREQAREQAREQAREQAREQARE4AIQkEC/AIOgJoiACIiACIiACIiACIiACIiACIiABLrmgAiIgAiIgAiIgAiIgAiIgAiIgAhcAAIS6BdgENQEERABERABERABERABERABERABEZBA1xwQAREQAREQAREQAREQAREQAREQgQtAQAL9AgyCmiACIiACIiACIiACIiACIiACIiACEuiaAyIgAiIgAiIgAiIgAiIgAiIgAiJwAQhIoF+AQVATREAEREAEREAEREAEREAEREAEREACXXNABERABERABERABERABERABERABC4AAQn0CzAIaoIIiIAIiIAIiIAIiIAIiIAIiIAISKBrDoiACIiACIiACIiACIiACIiACIjABSAggX4BBkFNEAEREAEREAEREAEREAEREAEREAEJdM0BERABERABERABERABERABERABEbgABCTQL8AgqAkiIAIiIAIiIAIiIAIiIAIiIAIiIIGuOSACIiACIiACIiACIiACIiACIiACF4CABPoFGAQ1QQREQAREQAREQAREQAREQAREQAQk0DUHREAEREAEREAEREAEREAEREAEROACEJBAvwCDoCaIgAiIgAiIgAiIgAiIgAiIgAiIgAS65oAIiIAIiIAIiIAIiIAIiIAIiIAIXAACEugXYBDUBBEQAREQAREQAREQAREQAREQARGQQNccEAEREAEREAEREAEREAEREAEREIELQEAC/QIMgpogAiIgAiIgAiIgAiIgAiIgAiIgAhLomgMiIAIiIAIiIAIiIAIiIAIiIAIicAEISKBfgEFQE0RABERABERABERABERABERABERAAl1zQAREQAREQAREQAREQAREQAREQAQuAAEJ9AswCGqCCIiACIiACIiACIiACIiACIiACEigaw6IgAiIgAiIgAiIgAiIgAiIgAiIwAUgIIF+AQZBTRABERABERABERABERABERABERABCXTNAREQAREQAREQAREQAREQAREQARG4AAQk0C/AIKgJIiACIiACIiACIiACIiACIiACIiCBrjkgAiIgAiIgAiIgAiIgAiIgAiIgAheAgAT6BRgENUEEREAEREAEREAEREAEREAEREAEJNA1B0RABERABERABERABERABERABETgAhCQQL8Ag6AmiIAIiIAIiIAIiIAIiIAIiIAIiIAEuuaACIiACIiACIiACIiACIiACIiACFwAAhLoF2AQ1AQREAEREAEREAEREAEREAEREAERkEDXHBABERABERABERABERABERABERCBC0BAAv0CDIKaIAIiIAIiIAIiIAIiIAIiIAIiIAIS6JoDIiACIiACIiACIiACIiACIiACInABCEigX4BBUBNEQAREQAREQAREQAREQAREQAREQAJdc0AEREAEREAEREAEREAEREAEREAELgABCfQLMAhqggiIgAiIwMePwBf/x38RuqZFU9fYbDZYr9eoNhvUVY3Q1ji6fxddtbH3+HpTN+CPcp6kyJLUniddQOg6hLYDAp8Hez3rEkyRIeueza1pGoQQ0HX9RmmaIs9zFEWBUGY4DjXqtEPg8bIM5XiEyXSGyWyCohyhGJeYzGaYzWcYTcYoyhKvffYHdN3w8Zuq6pEIiIAIiMAFIqAf2gs0GGqKCIiACIjAxSVw9kufDydPnuD06Bg4XaJ8cIr68QlOz87Qti26ENC0Deq2RZImJmgpfqmo+Wj3p7+6CfW23Si6/ZYmCZIkAR/TrUinwKbQ/nAHIEnS/sB272/cL76xTXwtfp3HMdEeOhRljq5rTcA/FfIhIM9yjEcj1Jvq6dHtyB82EyFJ0KUpWgS7hzxFNiox2Z1jur+LYjbBi6/dRlekGO/tYPRDf1/XGxd3aqtlIiACIiACF4iAfjAv0GCoKSIgAiIgAn/1BE5+69fC6dERzh4fYXl0hM3pGcJ6g8XjJ0hp1W4a5F1AQSs0RWrbotg0uJnPUJ+coaoqJFmKNMtAe3THX9Y0RUPxS3GeALRh89FFekCKtBiB9nAXzUOhTWs3b08F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'... 761588 more characters,
    title: 'The Core',
    site: 'https://www.facebook.com/thecorebox'
  },
  isDisabled: false,
  enabledModules: [ 'configuration' ]
}
  */