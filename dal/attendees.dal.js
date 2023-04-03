const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
  createAttendee,
  getAttendees,
  getAttendeeById,
  deleteAttendee,
  updateAttendee
};

function createAttendee(attendeeData) {
  return prisma.attendees.create({
    data: { ...attendeeData }
  });
}

function getAttendees() {
  return prisma.attendees.findMany()
}

function getAttendeeById(id) {
  return prisma.attendees.findUnique({
    where: { id }
  })
}

function deleteAttendee(id) {
  return prisma.attendees.delete({
    where: { id },
  })
}

function updateAttendee(data) {
  return prisma.attendees.update(data);
}
