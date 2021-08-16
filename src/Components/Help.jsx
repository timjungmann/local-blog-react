import React from 'react';

export default function Help({help}) {
  return (
    <div className="help">
      <p>Feel free to put your thoughts here and use this page as your private blog, your diary or notepad.</p>
      <p>You can either make a new entry or look at your past entries. To edit or delete an entry, use the according buttons on every post. Click the header of a post to enlarge it.</p>
      <p className="warning">All entries are only stored locally on your machine. Clearing your cache will delete them, so be careful.</p>
    </div>
  )
}
