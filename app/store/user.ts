import { create } from "zustand"

type State = {
  user: object
  userBookings: object[]
  availableBookings: object[]
  clientUnit: object
  extraFields: object
  notifications: object[]
}

type actions = {
  updateUser: (user: State["user"]) => void
  updateUserBookings: (userBookings: State["userBookings"]) => void
  updateAvailableBookings: (
    availableBookings: State["availableBookings"],
  ) => void
  updateClientUnit: (clientUnit: State["clientUnit"]) => void
  updateExtraFields: (extraFields: State["extraFields"]) => void
  updateNotifications: (notifications: State["notifications"]) => void
}

const useStore = create<State & actions>((set) => ({
  token: "",
  user: {},
  userBookings: [],
  availableBookings: [],
  clientUnit: {},
  extraFields: {},
  notifications: [],


  updateUser: (user) => set(() => ({ user: user })),
  updateUserBookings: (userBookings) =>
    set(() => ({ userBookings: userBookings })),
  updateAvailableBookings: (availableBookings) =>
    set(() => ({ availableBookings: availableBookings })),
  updateClientUnit: (clientUnit) => set(() => ({ clientUnit: clientUnit })),
  updateExtraFields: (extraFields) => set(() => ({ extraFields: extraFields })),
  updateNotifications: (notifications) =>
    set(() => ({ notifications: notifications })),
}))

export default useStore
