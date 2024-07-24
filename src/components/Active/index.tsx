import React, { useState } from 'react';
import './active.css'; // Create this CSS file based on your design

interface Contact {
  name: string;
  phone: string;
  email: string;
  location: string;
  role: string;
  status: string;
  activityLog?: string[];
  reminder?: string;
}

const contacts: Contact[] = [
  {
    name: 'Name Surname',
    phone: '055-555-55-55',
    email: 'email@email.com',
    location: 'Rehovot',
    role: 'FSD',
    status: 'Lead',
    activityLog: [
      '13.06.24 - Group #110, documents for min.Aliyah (QA)',
      '04.06.24 - Call, sent information',
      // Add more log entries as needed
    ],
    reminder: 'Fri, 12.02.2024 at 12:00',
  },
  // Add more contacts as needed
];

const Active: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <div
            className={`contact-header ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-details">
                <span className="contact-phone">{contact.phone}</span>
                <span className="contact-email">{contact.email}</span>
                <span className="contact-location">{contact.location}</span>
                <span className="contact-role">{contact.role}</span>
              </div>
            </div>
            <div className="contact-status">
              <select value={contact.status} className="status-dropdown">
                <option value="Lead">Lead</option>
                <option value="In work">In work</option>
                <option value="Consultation">Consultation</option>
                <option value="Save for later">Save for later</option>
                <option value="Student">Student</option>
                <option value="Archive">Archive</option>
              </select>
              {contact.reminder && <div className="contact-reminder">{contact.reminder}</div>}
            </div>
          </div>
          {expandedIndex === index && (
            <div className="contact-details-expanded">
              <div className="lead-status">
                <span>Lead status:</span>
                <select value={contact.status} className="status-dropdown">
                  <option value="Lead">Lead</option>
                  <option value="In work">In work</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Save for later">Save for later</option>
                  <option value="Student">Student</option>
                  <option value="Archive">Archive</option>
                </select>
              </div>
              <div className="activity-log">
                <span>Activity log:</span>
                <ul>
                  {contact.activityLog?.map((log, i) => (
                    <li key={i}>{log}</li>
                  ))}
                </ul>
              </div>
              <div className="add-comment">
                <label htmlFor={`comment-${index}`}>Add comment:</label>
                <input type="text" id={`comment-${index}`} placeholder="Add your comment here" />
                <button>Update</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Active;
