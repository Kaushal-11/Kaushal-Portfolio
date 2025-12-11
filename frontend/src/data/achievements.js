import { 
  FaMedal, 
  FaCertificate, 
  FaTrophy,
  FaStar,
  FaTimes,
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
  FaCode,
  FaGraduationCap,
  FaRunning
} from 'react-icons/fa';

// Enhanced achievements data with detailed information
const achievementsData = [
  {
    title: 'Publications',
    description: 'Research paper published in international conference',
    icon: FaCertificate,
    year: 2025,
    color: 'from-blue-400 to-purple-500',
    details: {
      publications: [
        {
          title: 'Attention-Enhanced UNETR for Polyp Segmentation Improving Accuracy and Robustness in Medical Imaging',
          type: 'Conference Paper',
          authors: ['Kaushal Bhanderi', 'Ronak R. Patel', 'Arpita Shah'],
          conference: '5th International Conference on Computer Vision and Robotics (CVR 2025)',
          heldBy: 'National Institute of Technology Goa',
          date: '2025',
          description: 'Advanced deep learning approach for medical image segmentation',
          skills: ['Deep Learning', 'Medical Imaging', 'Computer Vision', 'Python']
        }
      ]
    }
  },
  {
    title: 'Hackathon',
    description: 'Multiple competition achievements in tech challenges',
    icon: FaTrophy,
    year: 2025,
    color: 'from-yellow-400 to-orange-500',
    details: {
      hackathons: [
        {
          name: 'Odoo x Amalthea (IIT GN)',
          position: 'Top 7',
          date: 'October 2025',
          location: 'IIT Gandhinagar',          
          project: 'AI-Powered Healthcare Diagnostic Tool',
          description: 'Developed an AI system that can diagnose skin conditions from smartphone photos with 94% accuracy',
          tech: ['Odoo', 'Python', 'JavaScript'],
          prize: 'Finalist'
        },
        {
          name: 'Bengaluru Mobility Challenge (IISc Bangalore)',
          position: 'Top 30',
          date: 'September 2025',
          location: 'IISc Bangalore',
          project: 'AI-Powered Healthcare Diagnostic Tool',
          description: 'Developed an AI system that can diagnose skin conditions from smartphone photos with 94% accuracy',
          tech: ['IoT', 'Data Analytics', 'Urban Planning'],
          prize: 'Top 30'
        },
        {
          name: 'Odoo Combat 2024',
          position: 'Top 50',
          date: 'July 2024',
          location: 'Virtual',
          project: 'AI-Powered Healthcare Diagnostic Tool',
          description: 'Developed an AI system that can diagnose skin conditions from smartphone photos with 94% accuracy',
          tech: ['Odoo', 'Python', 'ERP Systems'],
          prize: 'Top 50'
        },
        {
          name: 'ISRO Robotics Challenges',
          position: 'Top 100',
          date: 'February 2024',
          location: 'National',
          project: 'AI-Powered Healthcare Diagnostic Tool',
          description: 'Developed an AI system that can diagnose skin conditions from smartphone photos with 94% accuracy',
          tech: ['Robotics', 'Embedded Systems', 'AI'],
          prize: 'Top 100'
        },
        {
          name: 'E-Yantra (IIT Bombay)',
          position: 'Passed Level 1',
          date: 'August 2023',
          location: 'IIT Bombay',
          project: 'AI-Powered Healthcare Diagnostic Tool',
          description: 'Developed an AI system that can diagnose skin conditions from smartphone photos with 94% accuracy',
          description: 'Robotics competition organized by IIT Bombay',
          tech: ['Robotics', 'Python', 'Embedded Systems'],
          prize: 'Level 1 Completion'
        }
      ]
    }
  },
  {
    title: 'Curriculum',
    description: 'Sports & Management',
    icon: FaMedal,
    year: 2025,
    color: 'from-green-400 to-teal-500',
    details: {
      activities: [
        {
          type: 'Management',
          name: 'University Level Student Council Member',
          role: 'Member',
          duration: 'June 2024 - June 2025',
          achievements: ['Represented student body at university level'],
          description: 'Participated in decision-making processes affecting student life'
        },
        {
          type: 'Management',
          name: 'Student Coordinator of Computer Engineering',
          role: 'Coordinator',
          duration: 'June 2024 - June 2025',
          achievements: ['Organized department events', 'Student-faculty liaison'],
          description: 'Coordinated activities for computer engineering students'
        },
        {
          type: 'Management',
          name: 'PR Team Lead in Club Gamma',
          role: 'Team Lead',
          duration: 'August 2024 - March 2025',
          achievements: ['Managed club publicity', 'Increased event participation'],
          description: 'Led public relations efforts for student club'
        },
        {
          type: 'Management',
          name: 'Hackathon Organizing Volunteer',
          role: 'Volunteer',
          duration: 'February 2025',
          event: 'Odoo X CHARUSAT',
          achievements: ['Helped organize successful hackathon event'],
          description: 'Contributed to planning and execution of tech competition'
        },
        {
          type: 'Sports',
          name: 'Kabaddi Winner',
          event: 'Spoural',
          date: 'January 2024',
          achievements: ['Championship title'],
          description: 'Competed in university sports tournament'
        },
        {
          type: 'Sports',
          name: 'TOW Winner',
          event: 'Spoural',
          date: 'January 2024',
          achievements: ['Championship title'],
          description: 'Competed in university sports tournament'
        },
        {
          type: 'Sports',
          name: 'Cricket Winner',
          event: 'Spoural',
          date: 'January 2025',
          achievements: ['Championship title'],
          description: 'Competed in university sports tournament'
        },
        {
          type: 'Sports',
          name: 'TOW Winner',
          event: 'Spoural',
          date: 'January 2025',
          achievements: ['Championship title'],
          description: 'Competed in university sports tournament'
        }
      ]
    }
  }
];

export default achievementsData;      