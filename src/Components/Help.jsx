import React from 'react';

export default function Help({help}) {
  return (
    <div className="help">
      <div className="help-inner">
        <p>MoodPad lets you put down your thoughts and feelings in a secure and easy way. All entries are only stored locally on your machine. Clearing your cache will delete them, so be careful.</p>
        <p>Use the sliders (R, G, B) to select a color to accompany your writing or just leave it plain white. </p>
        <p>Click the title of any entry to enlarge it.</p>
        <p>Edit, delete or download an entry with the according buttons.</p>
        <p className="help-footer">MoodPad was built by <a href="https://github.com/timjungmann">Tim Jungmann</a> using React</p>
      </div>
    </div>
  )
}
