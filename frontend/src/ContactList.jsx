import React from "react";

function ContactList({ contacts = [] }) {
  return (
    <div>
     <h2 className="text-2xl font-semibold mb-6 text-gray-800">
  Submitted Contacts
</h2>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts yet</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition bg-gray-50"
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                {contact.name.charAt(0).toUpperCase()}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-semibold text-lg">
                  {contact.name}
                </p>

                {contact.email && (
                  <p className="text-gray-600 text-sm">
                    📧 {contact.email}
                  </p>
                )}

                <p className="text-gray-600 text-sm">
                  📞 {contact.phone}
                </p>

                {contact.message && (
                  <p className="mt-2 text-gray-700 italic">
                    “{contact.message}”
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
