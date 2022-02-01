import React from 'react';

export default function Footer() {
    let currentYear = new Date().getFullYear();


    return (
        <footer>
            <div className="copyright">
                <span id="copyright">
                    Copyright &copy; 2020-{currentYear} Anthony Zhang - All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
