function ContactList({ contacts = [] }) {
  if (!Array.isArray(contacts) || contacts.length === 0) {
    return (
      <p className="text-gray-400 text-center">
        No contacts submitted yet
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">
        Submitted Contacts
      </h2>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4"
          >
            {/* Name */}
            <h3 className="text-lg font-bold text-white">
              {contact.name}
            </h3>

            {/* Email */}
            {contact.email && (
              <p className="text-gray-300 text-sm mt-1">
                <span className="font-medium text-gray-400">Email:</span>{" "}
                {contact.email}
              </p>
            )}

            {/* Phone */}
            <p className="text-gray-300 text-sm mt-1">
              <span className="font-medium text-gray-400">Phone:</span>{" "}
              {contact.phone}
            </p>

            {/* Message */}
            {contact.message && (
              <p className="text-gray-300 text-sm mt-2">
                <span className="font-medium text-gray-400">Message:</span>{" "}
                {contact.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
