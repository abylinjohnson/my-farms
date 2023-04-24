// @ts-nocheck
import { useRef } from 'react';

import Card from '../components/ui/Card';
import classes from './userForm.module.css';

function UserForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const profilePicInputRef = useRef();
  const emailInputRef = useRef();
  const twitterInputRef = useRef();
  const linkedinInputRef = useRef();
  const githubInputRef = useRef();
  const interestsInputRef = useRef();
  const currentRoleInputRef = useRef();
  const previousTitleInputRef = useRef();
  const resumeInputRef = useRef();
  const contactNumberRef = useRef();
  const additionalLinksRef = useRef();
  const readyToWorkLinksRef = useRef();
  const whyMeLinksRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const fname = firstNameInputRef.current.value;
    const lname = lastNameInputRef.current.value;
    const profilePic = profilePicInputRef.current.value;
    const email = emailInputRef.current.value;
    const twitter = twitterInputRef.current.value;
    const linkedin = linkedinInputRef.current.value;
    const github = githubInputRef.current.value;
    const intersets = interestsInputRef.current.value;
    const current_role = currentRoleInputRef.current.value;
    const previous_title = previousTitleInputRef.current.value;
    const resume = resumeInputRef.current.value;
    const contact = contactNumberRef.current.value;
    const additional_links = additionalLinksRef.current.value;
    const readytowork = readyToWorkLinksRef.current.value;
    const whyme = whyMeLinksRef.current.value


    const formData = {
      first_name: fname,
      last_name: lname,
      profile_pic: profilePic,
      email: email,
      twitter: twitter,
      linkedin: linkedin,
      github: github,
      interests: intersets,
      current_role: current_role,
      previous_title: previous_title,
      resume: resume,
      contact_no: contact,
      additional_links: additional_links,
      ready_to_work: readytowork,
      why_recruit_me : whyme

    };
    console.log(formData)
    props.onAddForm(formData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' required id='firstname' ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' required id='lastname' ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Profile </label>
          <input type='file' id='address' ref={profilePicInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email </label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='twitter'>Twitter </label>
          <input type='url' required id='twitter' ref={twitterInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='linkedin'>Linkedin</label>
          <input type='url' required id='linkedin' ref={linkedinInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='github'>Github</label>
          <input type='url' required id='github' ref={githubInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='interests'>Interests</label>
          <input type='text' required id='interests' ref={interestsInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='currentrole'>Current Role</label>
          <input type='text' required id='currentrole' ref={currentRoleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='previoustitle'>Previous Title</label>
          <input type='text' required id='previoustitle' ref={previousTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='resume'>Resume</label>
          <input type='file' id='resume' ref={resumeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='contact'>Contact Number</label>
          <input type='text' required id='contact' ref={contactNumberRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='additionallinks'>Additional Links</label>
          <input type='text' required id='additionallinks' ref={additionalLinksRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='readytowork'>Ready To Work?</label>
          <input type='text' required id='readytowork' ref={readyToWorkLinksRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Why Recruit Me?</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={whyMeLinksRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default UserForm;
