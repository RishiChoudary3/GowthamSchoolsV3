import React from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  resume: FileList;
};

type Props = {
  jobId: string;
  onClose: () => void;
};

const WEBHOOK_URL = 'https://hook.eu2.make.com/lzvhbtd3fr72angv4prnmeijumvgfmfy';

export default function JobApplicationForm({ jobId, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Create FormData to handle file upload
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('education', data.education);
      formData.append('experience', data.experience);
      formData.append('jobId', jobId);
      formData.append('resume', data.resume[0]);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      alert('Thank you for your application. We will review and get back to you soon!');
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-lg p-6 my-8 text-left align-middle bg-white rounded-xl shadow-xl transform transition-all relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-2">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Job Application</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register("fullName", { 
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                    pattern: { value: /^[A-Za-z\s]+$/, message: "Please enter a valid name" }
                  })}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Please enter a valid Indian mobile number"
                    }
                  })}
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                  Educational Qualifications *
                </label>
                <textarea
                  {...register("education", { 
                    required: "Educational qualifications are required",
                    minLength: { value: 10, message: "Please provide more details about your education" }
                  })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder="Enter your educational qualifications (degrees, certifications, etc.)"
                  disabled={isSubmitting}
                />
                {errors.education && (
                  <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Teaching Experience *
                </label>
                <textarea
                  {...register("experience", { 
                    required: "Teaching experience is required",
                    minLength: { value: 10, message: "Please provide more details about your experience" }
                  })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  placeholder="Describe your teaching experience, including years of experience and subjects taught"
                  disabled={isSubmitting}
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV *
                </label>
                <input
                  {...register("resume", { 
                    required: "Resume is required",
                    validate: {
                      fileSize: (files) => !files[0] || files[0].size <= 5000000 || "File size must be less than 5MB",
                      fileType: (files) => 
                        !files[0] || 
                        ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files[0].type) || 
                        "Please upload a PDF or Word document"
                    }
                  })}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  disabled={isSubmitting}
                />
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">Max file size: 5MB. Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}